"use client";

import { useEffect } from "react";

const RECOVERY_KEY_PREFIX = "citizendesk-route-recovery:";

function isRouteAssetFailure(reason: unknown) {
  const message =
    reason instanceof Error
      ? `${reason.name} ${reason.message}`
      : typeof reason === "string"
        ? reason
        : "";

  return [
    "ChunkLoadError",
    "Loading chunk",
    "failed to fetch dynamically imported module",
    "Failed to fetch RSC payload",
    "Cannot find module for page",
  ].some((needle) => message.includes(needle));
}

function recoverFromStaleRouteAssets() {
  const key = `${RECOVERY_KEY_PREFIX}${window.location.pathname}${window.location.search}`;

  if (sessionStorage.getItem(key) === "1") {
    return;
  }

  sessionStorage.setItem(key, "1");
  window.location.reload();
}

export function RouteRefreshRecovery() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      if (isRouteAssetFailure(event.error) || isRouteAssetFailure(event.message)) {
        recoverFromStaleRouteAssets();
      }
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isRouteAssetFailure(event.reason)) {
        recoverFromStaleRouteAssets();
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
