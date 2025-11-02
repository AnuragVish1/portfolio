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
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";



export const MyDrawer = ({ children, image, description, title, images }) => {

  const [isOverlyClick, setIsOverlyClick] = useState(false);

  useEffect(() => {
    console.log(isOverlyClick);
  }, [isOverlyClick]);

  useEffect(() => {
    setIsOverlyClick(false);

    return () => {
      setIsOverlyClick(false);
    }
  }, []);

  return (
    <>
      <Drawer>

        <DrawerTrigger
          className="text-left w-full
        "
        >
          {children}
        </DrawerTrigger>
        <DrawerContent className="bg-[#f9f3e9]" onInteractOutside={(e) => {
          if (isOverlyClick) {
            e.preventDefault();
          }
        }}
        >
          {isOverlyClick && images.length != 0 &&  (
            <div className=" bg-[#00000041] fixed h-full w-full inset-0 z-[100] p-10 backdrop-blur-xl rounded-lg" onClick={(e) => {
              e.stopPropagation()
            }}>
              {/*navbar*/}
              <div className="flex justify-between flex-row w-full">
                <h1 className=" text-4xl text-white font-bold">{title}</h1>
                <button className="bg-[#f6f6f6e1] size-auto rounded-sm p-2 active:scale-90" onClick={(e) => {
                  e.stopPropagation();
                  setIsOverlyClick(false)
                  console.log(isOverlyClick)
                }}>
                  <X />
                </button>
              </div>
              {/*carousel*/}
              <div className="w-full h-full flex justify-center items-center">
                <Carousel className="md:w-[50%] w-[95%]">
                  <CarouselContent className="">
                    {images.map((image, _) => (
                      <CarouselItem key={_}>
                        <img src={image} alt="" draggable="false" className="rounded-lg z-100  " />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious  className="l-2"/>
                  <CarouselNext className="mr-2"/>
                </Carousel>
              </div>
            </div>
          )}

          <div className="p-10 font-inter ">

            <div className=" flex gap-6 md:flex-row flex-col ">


              <img
                src={image}
                alt=""
                className=" rounded-xl md:h-[19rem] mt-5 md:object-cover lg:object-cover object-contain bg-amber-100"
                onClick={(e) => { if (images.length != 0) { setIsOverlyClick(true) }}}
              />



              <div className="flex flex-col justify-between">
                <h1 className="md:text-[4rem] text-[2.5rem] font-bold">{title}</h1>

                <p className=" pt-5 text-2xl w-full text-justify overflow-scroll md:overflow-hidden">
                  {description}
                </p>
              </div>
            </div>
          
          </div>
        </DrawerContent>
      </Drawer>

    </>
  );
};
