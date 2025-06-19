import { CertificateTypes } from "@/lib/types";
import React from "react";
import IssuedCertificateCard from "../custom-ui/cards/IssuedCertificateCard";
import PendingCertificateCard from "../custom-ui/cards/PendingCertificateCard";

interface CertificationsCardsProps {
  issuedCertificateData: CertificateTypes[];
  pendingCertificateData: CertificateTypes[];
  currentTab: string;
}

export default function CertificationsCards({
  issuedCertificateData,
  pendingCertificateData,
  currentTab,
}: CertificationsCardsProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-4">
        {currentTab === "Issued certificate" ? (
          <IssuedCertificateCard certificateData={issuedCertificateData} />
        ) : (
          <PendingCertificateCard certificateData={pendingCertificateData} />
        )}
      </div>
    </section>
  );
}
