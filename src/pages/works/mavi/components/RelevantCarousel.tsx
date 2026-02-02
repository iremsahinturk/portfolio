import { Card, CardContent } from "@/common/shadcn/components/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/common/shadcn/components/carousel"
import { useEffect, useState } from "react"

export const RelevantCarousel = ({ carouselItems, title }: { carouselItems: any[], title: string }) => {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [slides] = useState<number[]>(Array.from({ length: 5 }))

  console.log({ carouselItems })

  useEffect(() => {
    if (!mainApi) {
      return
    }

    const onSelect = () => {
      const selected = mainApi.selectedScrollSnap()
      setCurrent(selected)
      thumbApi?.scrollTo(selected)
    }

    mainApi.on("select", onSelect)
    onSelect()

    return () => {
      mainApi.off("select", onSelect)
    }
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!thumbApi) {
      return
    }

    const onThumbClick = () => {
      if (!mainApi) return
      mainApi.scrollTo(thumbApi.selectedScrollSnap())
    }

    thumbApi.on("select", onThumbClick)

    return () => {
      thumbApi.off("select", onThumbClick)
    }
  }, [mainApi, thumbApi])

  const handleThumbClick = (index: number) => {
    mainApi?.scrollTo(index)
  }

  return (
    <div className="max-w-full mx-auto mt-24 px-10">
      <h2 className="text-[2.5em] tracking-wider font-semibold text-center">
        {title}
      </h2>
      <div className='flex flex-col items-center mt-16 gap-6'>
        {/* Main Carousel */}
        <Carousel setApi={setMainApi} className="w-full max-w-6xl">
          <CarouselContent>
            {slides.map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Thumbnails Carousel */}
        {/* <div> */}
          <Carousel
            setApi={setThumbApi}
            className="w-full max-w-6xl"
            opts={{
              dragFree: true,
              containScroll: "keepSnaps",
              align: "end",
            }}
          >
            <CarouselContent className="ml-3 mr-3 gap-4">
              {slides.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 basis-1/6 md:basis-1/8 lg:basis-1/10 cursor-pointer"
                  onClick={() => handleThumbClick(index)}
                >
                  <Card
                    className={`
                      transition-all duration-200
                      ${current === index 
                        ? 'ring-2 ring-primary ring-offset-2' 
                        : 'opacity-50 hover:opacity-75'
                      }
                    `}
                  >
                    <CardContent className="flex aspect-square items-center justify-center p-3">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        {/* </div> */}
      </div>
    </div>
  )
}
