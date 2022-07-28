import React from "react";
import { useRouter } from "next/router";

const blogNo = () => {
  const router = useRouter();
  const { blog_no } = router.query;
  console.log("router", router);
  return <div>blogNo {blog_no}</div>;
};

export default blogNo;
