import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const MyDrawer = ({ children, image, description, title }) => {
  return (
    <Drawer>
      <DrawerTrigger
        className="text-left w-full
        "
      >
        {children}
      </DrawerTrigger>
      <DrawerContent className="bg-[#f9f3e9]">
        <div className="p-10 font-inter overflow-scroll">
          <div className=" flex gap-6 md:flex-row flex-col ">
            <img
              src={image}
              alt=""
              className=" rounded-xl h-[15rem]  mt-5 object-cover object-center"
            />
            <div className="flex flex-col justify-between">
              <h1 className="md:text-[4rem] text-[2.5rem] font-bold">{title}</h1>

              <p className=" pt-5 text-2xl w-full text-justify overflow-scroll">
                {description}
              </p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
