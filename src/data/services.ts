export type Service = {
  title: string;
  description: string;
  items: string[];
  icon: "network" | "factory" | "shield" | "signal";
};

export const services: Service[] = [
  {
    title: "Enterprise Network Architecture & System Integration",
    description:
      "Reliable, scalable connectivity designed for new corporate offices, educational institutions, private hospitals, and commercial complexes.",
    icon: "network",
    items: [
      "Structured cabling and campus LAN/WLAN design",
      "Cisco and Fortinet enterprise Wi-Fi, wireless site surveys, and WLAN controller deployments",
      "Multi-vendor router and switch migrations",
      "SD-WAN and cloud-managed networking with Cisco Meraki and orchestration platforms",
    ],
  },
  {
    title: "Industrial IoT & Smart Infrastructure",
    description:
      "Connected infrastructure for manufacturers, logistics hubs, and industrial sites across the Anantapur–Bengaluru corridor.",
    icon: "factory",
    items: [
      "Rugged industrial networks for smart factories",
      "IP CCTV networks, NAS backups, and biometric access control",
      "Warehouse wireless coverage for inventory systems and RF barcode scanners",
      "Fiber, industrial modems, and SCADA telemetry for solar, wind, and substations",
    ],
  },
  {
    title: "Managed Network Security & Perimeter Protection",
    description:
      "Practical security measures to help protect business networks, users, and branch communications.",
    icon: "shield",
    items: [
      "Fortinet FortiGate and Cisco ASA/Firepower next-generation firewall deployment and management",
      "Access control list and policy reviews",
      "Site-to-site and remote access VPNs",
    ],
  },
  {
    title: "Telecom Operations & Managed Services",
    description:
      "Flexible field and remote operations for tier-1/tier-2 telecom operators, ISPs, and enterprise teams that need SLA-backed support.",
    icon: "signal",
    items: [
      "On-demand change requests, node insertions, 1G-to-10G ring splits, and core upgrades",
      "Last-mile fiber, 4G/5G CPE upgrades, and microwave-to-fiber migration",
      "Remote NOC monitoring, bandwidth analysis, and incident response",
      "24/7 or custom-shift support options",
    ],
  },
];
