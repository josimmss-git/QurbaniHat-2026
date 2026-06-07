"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user
  
  const handleLogout = async () => {
    await authClient.signOut();
  }
 
  return (
   
   <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/qurbani-logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        <div>
          
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"}>All Animal</Link>
          </li>

          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>
       </div>
          
        <div className="flex gap-4">
           {
          !user &&
          <ul className="flex items-center  text-sm gap-4">
            <li>
              <Link href={"/signup"}>Register</Link>
            </li>
            <li>
              <Link href={"/signin"}>Login</Link>
            </li> 
            </ul>}
          {
            user && (
              <div className="flex items-center gap-4">
            <Avatar size='sm'>
                <Avatar.Image alt={user?.name} src={user?.image}
                referrerPolicy="no referrer"/>
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              

              <Button variant='danger' onClick={handleLogout}>
                Logout
              </Button>

              </div>)}
        </div>
      </nav>
      </div>

  );
};

export default Navbar;

