"use client"
import { UpdateUsersModal } from "@/Components/UpdateUsersModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {

   const userData = authClient.useSession();
  const user = userData.data?.user
  console.log(user,'profile page user')
  return (
    <div>
      <Card className="max-w-96 mx-auto flex mt-10  flex-col border items-center gap-4 p-6">
        
 <Avatar className="w-20 h-20">
                <Avatar.Image alt={user?.name} src={user?.image}
                referrerPolicy="no referrer"/>
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>
          <UpdateUsersModal />

      </Card>
    
    </div>
  );
};

export default ProfilePage;