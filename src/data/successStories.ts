export type SuccessStory = {
  category: string;
  title: string;
  issue: string;
  authority: string;
  outcome: string;
  timeline: string;
  lesson: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const successStories: SuccessStory[] = [
  {
    category: "Overcharging / unfair trade practice",
    title: "Aligarh commission orders penalty after an alleged MRP overcharge",
    issue: "A customer alleged that a Hathras restaurant charged ₹20 for a packaged water bottle marked ₹18 MRP.",
    authority: "District Consumer Disputes Redressal Commission, Aligarh.",
    outcome: "The report says the commission directed ₹1 lakh to the Consumer Welfare Fund, plus ₹1,000 compensation and ₹5,000 litigation costs to the complainant. The restaurant was directed to comply within 45 days.",
    timeline: "The purchase was reported as 11 March 2026; the restaurant was proceeded against ex parte on 21 May 2026; the report was published on 13 October 2026.",
    lesson: "Keep the bill and clear product-price evidence. The reported order treated sale above the printed MRP as an unfair trade practice.",
    sourceLabel: "Indian Express legal report (13 October 2026)",
    sourceUrl: "https://indianexpress.com/article/legal-news/restaurant-rs-on-water-bottle-told-to-pay-rs-1-lakh-fine-10919471/",
  },
  {
    category: "Health insurance",
    title: "Tripura State Commission directs reimbursement after an insurance appeal",
    issue: "The consumer challenged repudiation of health-insurance expenses connected to admission and diagnostic tests.",
    authority: "Tripura State Consumer Disputes Redressal Commission.",
    outcome: "In its 15 July 2024 order, the State Commission set aside the District Commission order and directed reimbursement of ₹51,780, compensation of ₹25,000, and litigation costs of ₹5,000 within one month.",
    timeline: "The appeal followed a District Commission order dated 29 February 2024.",
    lesson: "Keep policy wording, treatment records, claim papers, and the insurer's repudiation letter. The order turned on the policy terms and the evidence before the Commission.",
    sourceLabel: "Published State Commission order (15 July 2024)",
    sourceUrl: "https://indiankanoon.org/doc/165069542/",
  },
  {
    category: "Vehicle purchase and insurance",
    title: "State Commission increases compensation for delayed vehicle registration",
    issue: "A purchaser alleged that a dealer delayed registration after delivering a replacement vehicle; an accident occurred before registration.",
    authority: "Madhya Pradesh State Consumer Disputes Redressal Commission.",
    outcome: "On 27 September 2024, the State Commission increased the dealer's compensation from ₹25,000 to ₹50,000 and awarded ₹5,000 appeal costs, while leaving the remaining directions unchanged.",
    timeline: "The appeal concerned a District Commission order dated 29 October 2018.",
    lesson: "Retain delivery, registration, insurance, and correspondence records. Consumer forums assess the specific service provider's role and the record of delay.",
    sourceLabel: "Published State Commission order (27 September 2024)",
    sourceUrl: "https://indiankanoon.org/doc/60591036/",
  },
  { category: "E-commerce", title: "State Commission orders refund for a product that did not match its description", issue: "The consumer said the delivered online product did not correspond with its description.", authority: "Punjab State Consumer Disputes Redressal Commission.", outcome: "On 1 February 2024, the appeal was partly accepted: the respondents were directed to take back the defective product, refund ₹13,750 with interest, and pay ₹10,000 compensation plus ₹10,000 costs.", timeline: "Published order dated 1 February 2024.", lesson: "Save the listing, invoice, delivery material and communications; the published order relied on the mismatch between description and goods.", sourceLabel: "Published State Commission order (1 February 2024)", sourceUrl: "https://indiankanoon.org/doc/6736138/" },
  { category: "E-commerce", title: "Telangana Commission confirms refund for an empty returned-watch package claim", issue: "The consumer alleged that a returned wrist-watch package was empty and sought relief from the e-commerce parties.", authority: "Telangana State Consumer Disputes Redressal Commission.", outcome: "On 12 November 2024, the State Commission dismissed the consumer's enhancement appeal and confirmed the District Commission's ₹3,700 refund with 9% interest, ₹10,000 compensation and ₹5,000 costs.", timeline: "The underlying District Commission order was dated 20 September 2022.", lesson: "Evidence matters: the published decision discusses what was and was not proved, even where some relief had already been granted.", sourceLabel: "Published State Commission order (12 November 2024)", sourceUrl: "https://indiankanoon.org/doc/4639339/" },
  { category: "E-commerce / overcharge", title: "Appeal leaves online-fashion refund and costs intact", issue: "The consumer alleged that an online-fashion platform had charged an excessive amount.", authority: "State Consumer Disputes Redressal Commission, Chandigarh.", outcome: "The 3 May 2024 order records that the lower commission allowed a ₹1,060 refund with 9% interest, ₹5,000 compensation and ₹5,000 costs; the consumer's appeal sought higher compensation.", timeline: "Published order dated 3 May 2024.", lesson: "Even small-value disputes benefit from preserving the bill and the exact amount claimed; appeals may not increase relief without supporting grounds.", sourceLabel: "Published State Commission order (3 May 2024)", sourceUrl: "https://indiankanoon.org/doc/8698058/" },
  { category: "Insurance", title: "Vehicle-insurance appeal records repair award and compensation", issue: "The consumer sought payment for vehicle-repair expenditure after an insurance dispute.", authority: "Chhattisgarh State Consumer Disputes Redressal Commission.", outcome: "The 18 September 2024 appeal record states that the District Commission directed payment of ₹1,28,250 for repair, ₹3,000 compensation and ₹3,000 litigation costs.", timeline: "The challenged District Commission order was dated 20 December 2023.", lesson: "Retain repair estimates, policy papers, survey material and all claim correspondence before approaching a consumer commission.", sourceLabel: "Published State Commission appeal order (18 September 2024)", sourceUrl: "https://indiankanoon.org/doc/141959140/" },
  { category: "Insurance", title: "Tamil Nadu Commission records theft-claim award after repudiation", issue: "The consumer challenged repudiation of a vehicle-theft claim said to have been reported late.", authority: "Tamil Nadu State Consumer Disputes Redressal Commission.", outcome: "The 13 May 2024 order records an award of ₹21,900 insurance amount, ₹15,000 compensation for deficiency, and ₹5,000 costs.", timeline: "Published order dated 13 May 2024.", lesson: "Promptly report theft to the police and insurer and preserve each acknowledgement; timing and policy terms were central to the dispute.", sourceLabel: "Published State Commission order (13 May 2024)", sourceUrl: "https://indiankanoon.org/doc/65988067/" },
  { category: "Railway passenger compensation", title: "Delhi High Court awards statutory compensation after railway claim dismissal", issue: "Family members challenged the Railway Claims Tribunal's dismissal after a passenger died following a fall from a train.", authority: "Delhi High Court.", outcome: "On 5 January 2024, the High Court set aside the tribunal decision and awarded statutory compensation of ₹8 lakh with 9% interest from the accident, subject to the directions in the judgment.", timeline: "The accident was stated to be 12 September 2018.", lesson: "In a railway claim, retain ticket or pass information and incident records; statutory compensation turns on the evidence and legal conditions.", sourceLabel: "Delhi High Court judgment (5 January 2024)", sourceUrl: "https://indiankanoon.org/doc/110631178/" },
  { category: "Railway passenger compensation", title: "Karnataka High Court allows railway compensation claim", issue: "Claimants sought compensation after a death in an alleged railway untoward incident.", authority: "Karnataka High Court.", outcome: "On 2 April 2024, the High Court set aside the tribunal decision and ordered ₹4 lakh plus interest, with the judgment specifying that compensation should be at least ₹8 lakh if the applicable calculation did not exceed that amount.", timeline: "Published judgment dated 2 April 2024.", lesson: "The court examined passenger status and incident records; claims depend on the statutory requirements and proof in the particular case.", sourceLabel: "Karnataka High Court judgment (2 April 2024)", sourceUrl: "https://indiankanoon.org/doc/69053113/" },
  { category: "Railway passenger compensation", title: "Bombay High Court awards compensation in a railway appeal", issue: "The appellant challenged rejection of a railway compensation claim.", authority: "Bombay High Court, Nagpur Bench.", outcome: "On 20 February 2024, the High Court allowed the appeal and directed payment of ₹8 lakh within four months, with 6% interest if payment was delayed.", timeline: "Published judgment dated 20 February 2024.", lesson: "The result follows the evidence and statutory exclusions in an individual claim; preserve travel and incident records promptly.", sourceLabel: "Bombay High Court judgment (20 February 2024)", sourceUrl: "https://indiankanoon.org/doc/97867635/" },
  { category: "Railway service", title: "Commission record addresses cancelled reserved accommodation", issue: "Passengers complained after a reserved coach was not attached and they incurred further travel expense.", authority: "Madhya Pradesh State Consumer Disputes Redressal Commission.", outcome: "The 20 March 2024 appellate record describes the District Commission's joint direction for ₹50,000 compensation and ₹5,000 costs; both sides had appealed.", timeline: "The District Commission order was dated 10 January 2022.", lesson: "Keep reservation details, notices, replacement-travel bills and refund correspondence; appellate proceedings can affect the final position.", sourceLabel: "Published State Commission appeal order (20 March 2024)", sourceUrl: "https://indiankanoon.org/doc/143693733/" },
];
