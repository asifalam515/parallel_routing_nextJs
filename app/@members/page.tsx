import Link from "next/link";
import React from "react";

const Members = () => {
  return (
    <div className="border  p-[10rem] w-[30rem]">
      <h1>Memebers</h1>
      <Link href="/salaries">Go to salary Page</Link>
    </div>
  );
};

export default Members;
