"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { TbAlertCircle } from "react-icons/tb";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const user = useUser();
  const userId = user?.user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-500 font-semibold text-lg">
          <TbAlertCircle
            size={24}
            className="text-red-500 font-semibold inline mr-2"
          />
          Sorry, Tickets are no longer available
        </p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button" size="lg">
              <Link href="/sign-in">Sign in to buy tickets</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
