import React from "react";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Container({ className = "", children }: ContainerProps) {
  return (
    <section className="flex items-center justify-center">
      <div
        className={`flex ${className} justify-center w-350 mx-5 sm:mx-10 lg:mx-15 overflow-hidden`}
      >
        {children}
      </div>
    </section>
  );
}