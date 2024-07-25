import React, { useEffect } from "react";
import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { checkOutOrder } from "@/lib/actions/order.actions";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    // console.log("checkout");
    const order = {
      eventId: event._id,
      eventTitle: event.title,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkOutOrder(order);
  };

  return (
    <form
      action={onCheckout}
      // method="post"
    >
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Registered" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
