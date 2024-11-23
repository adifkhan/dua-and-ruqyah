"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Redirect to the Dua's Importance page when the Home page is loaded
  useEffect(() => {
    router.push("/duas/Dua's%20Importance?cat=1");
  }, [router]);
  return <div></div>;
}
