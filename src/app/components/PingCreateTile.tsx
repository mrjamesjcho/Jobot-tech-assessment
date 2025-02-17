import React from "react";

interface PingCreateTileProps {
  latestPingTimestamp: string | null;
  error?: string;
}

export default function PingCreateTile({
  latestPingTimestamp,
  error,
}: PingCreateTileProps) {
  return (
    <div className="flex flex-col border p-4 w-full">
      {error ? (
        <React.Fragment>
          <p className="text-center">Error:</p>
          <p className="text-center">{error}</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="text-center">Created new ping:</p>
          <p className="text-center">{latestPingTimestamp ?? "N/A"}</p>
        </React.Fragment>
      )}
    </div>
  );
}
