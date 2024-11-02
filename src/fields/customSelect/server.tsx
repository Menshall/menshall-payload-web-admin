import React from "react";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { CustomSelectComponent } from "@/fields/customSelect/component";

const ServerSelectComponent = async ({ path }: { path: string }) => {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "pages",
  });
  // const pages = await payload.find({
  //   collection: "pages",
  // });
  return <CustomSelectComponent pages={pages} path={path} />;
};

export default ServerSelectComponent;
