"use client"
import { TiThMenu } from "react-icons/ti";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./navigationMenu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden bg-white">
            <Button className=" text-black">
                <TiThMenu />
                </Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-white">
            <SheetTitle className=" mb-3 text-3xl">
                Shop.co
            </SheetTitle>
            {/* navbar */}
    <ul className=''>
        <li className='flex flex-col space-y-3 '>
        <Link href=""><NavigationMenuDemo/></Link>
        <Link href="" className="m-3">On Sale</Link>
        <Link href="" className="m-3">New Arrivals</Link>
        <Link href="" className="m-3">Brands</Link>
        </li>
    </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
