import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaShopify } from "react-icons/fa"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='outline outline-1 rounded-full text-white text-lg hover:bg-yellow-400 hover:text-red-700 hover:shadow-xl'>
          <FaShopify  className='animate-bounce' />Login with Email</Button>
      </SheetTrigger>
      <SheetContent className="bg-myColor4">
        <SheetHeader>
          <SheetTitle className="text-3xl font-bold">Sign In</SheetTitle>
          <SheetDescription className="text-md">
            Sign in to access your account and start shopping.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-8">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input id="name" placeholder="Write here..." className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input id="username" type="password" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
