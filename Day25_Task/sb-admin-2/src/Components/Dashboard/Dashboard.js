import React from "react";
import { Link } from "react-router-dom";
import { ChartExample } from "./ChartExample";
import { ColorSystemExample } from "./ColorSystemExample";
import { DevelopmentApproach } from "./DevelopmentApproach";
import { IllustrationExample } from "./IllustrationExample";
import { MiniCard } from "./MiniCard";
import { ProjectCardExample } from "./ProjectCardExample";

export function Dashboard() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>

      <MiniCard />
      <ChartExample />
      {/* <!-- Content Row ---> */}
      <div className="row">
        {/* <!-- Content Column ---> */}
        <div className="col-lg-6 mb-4">
          <ProjectCardExample />
          <ColorSystemExample />
        </div>
        <div className="col-lg-6 mb-4">
          <IllustrationExample />
          <DevelopmentApproach />
        </div>
      </div>
    </div>
  );
}
