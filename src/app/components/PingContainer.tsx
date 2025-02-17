"use client";

import { useMutation, useQuery, useSubscription } from "@apollo/client";
import PingCreateTile from "./PingCreateTile";
import PingSubscriptionTile from "./PingSubscriptionTile";
import { useEffect, useState } from "react";
import { gql } from "@/__generated__/gql";

const GET_LATEST_PING = gql(`
  query GetLatestPing {
    latestPing {
      timestamp
    }
  }
`);

const CREATE_PING = gql(`
  mutation CreatePing {
    createPing {
      timestamp
    }
  }
`);

const LATEST_PING_SUBSCRIPTION = gql(`
  subscription LatestPingSubscription {
    latestPing {
      timestamp
    }
  }
`);

export default function PingContainer() {
  // states
  const [createNewPing, setCreateNewPing] = useState(true);
  const [latestPingTimestamp, setLatestPingTimestamp] = useState<string | null>(
    null
  );
  const [latestPingError, setLatestPingError] = useState<string>();

  // queries and mutations
  const { data: initialData, error: initialError } = useQuery(GET_LATEST_PING);
  const [createPing, { data: createData, error: createError }] =
    useMutation(CREATE_PING);
  const { data: subscriptionData, error: subscriptionError } = useSubscription(
    LATEST_PING_SUBSCRIPTION
  );

  // get latest ping on initial render
  useEffect(() => {
    setLatestPingTimestamp(initialData?.latestPing?.timestamp);
    setLatestPingError(initialError?.message);
  }, [initialData, initialError]);

  // update latest ping on subscription data change
  useEffect(() => {
    setLatestPingTimestamp(subscriptionData?.latestPing?.timestamp);
    setLatestPingError(subscriptionError?.message);
  }, [subscriptionData, subscriptionError]);

  // create new ping every 1-3 seconds
  useEffect(() => {
    if (createNewPing) {
      createPing();
      setCreateNewPing(false);
      setTimeout(
        () => setCreateNewPing(true),
        Math.floor(Math.random() * 3 + 1) * 1000
      );
    }
  }, [createNewPing, createPing]);

  return (
    <div className="flex flex-col w-md h-md">
      <PingCreateTile
        latestPingTimestamp={createData?.createPing.timestamp}
        error={createError?.message}
      />
      <PingSubscriptionTile
        latestPingTimestamp={latestPingTimestamp}
        error={latestPingError}
      />
    </div>
  );
}
