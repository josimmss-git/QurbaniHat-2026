"use client";

import { Button, Card, Input, TextArea } from "@heroui/react";
import { toast } from "react-toastify";

export default function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking Submitted Successfully!");

    e.target.reset();
  };

  return (
    <Card className=" max-w-2xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Book This Animal
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your name"
          isRequired
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          isRequired
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          isRequired
        />

        
<TextArea
  label="Address"
  placeholder="Enter your address"
/>

        <Button
          type="submit"
          color="success"
          size="lg"
          className="w-full"
        >
          Book Now
        </Button>
      </form>
    </Card>
  );
}
