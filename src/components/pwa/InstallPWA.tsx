
"use client";

import { useEffect, useState } from "react";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export function InstallPWA() {
  const [installPrompt, setInstallPrompt] =
    useState<InstallPromptEvent | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };

    const handleInstalled = () => {
      setInstallPrompt(null);
      setShowHelp(false);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt,
    );
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function handleInstall() {
    if (!installPrompt) {
      setShowHelp((current) => !current);
      return;
    }

    await installPrompt.prompt();
    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setInstallPrompt(null);
    }
  }

  return (
    <div className="mx-auto my-4 w-full max-w-7xl px-4">
      <button
        type="button"
        onClick={handleInstall}
        className="rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800"
      >
        {installPrompt ? "Install CitizenDesk India" : "How to install"}
      </button>

      {showHelp && !installPrompt && (
        <p className="mt-2 text-sm text-gray-600">
          In Chrome, open the browser menu and look for
          "Install page as app" or "Install app". If this
          option is unavailable, the website may not yet
          meet the browser's installation requirements.
        </p>
      )}
    </div>
  );
}
