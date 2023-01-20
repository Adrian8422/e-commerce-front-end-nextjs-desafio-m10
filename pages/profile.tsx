import { Layout } from "components/layout";

import { useCurrentUserState } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetPreviousPage } from "lib/atoms";
import { ProfilePage } from "components/profile-page";

export default function ProfilePg() {
  return (
    <Layout>
      <ProfilePage />
    </Layout>
  );
}
