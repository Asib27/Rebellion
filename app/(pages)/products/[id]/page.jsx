'use client';

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const productData = {
  "1": {
    id: "1",
    name: "Nike Air Max",
    description: "Comfortable for all occasions",
    colors: {
      red: {
        image: "/temp_images/real_shoe1.png",
        views: {
          front: "/temp_images/real_shoe1.png",
          side: "/temp_images/real_shoe1.png",
          top: "/temp_images/real_shoe1.png",
          bottom: "/temp_images/real_shoe1.png",
        },
        sizes: {
          "38": { price: "150", availability: "In Stock" },
          "39": { price: "155", availability: "Out of Stock" },
        },
      },
      green: {
        image: "/temp_images/real_shoe1.png",
        views: {
          front: "/temp_images/real_shoe1.png",
          side: "/temp_images/real_shoe1.png",
        },
        sizes: {
          "40": { price: "160", availability: "In Stock" },
          "41": { price: "165", availability: "Limited Stock" },
        },
      },
    },
  },
  // Add more products if necessary
};

export default function ProductDetailPage({ params }) {
  // const { id } = params;
  const { id } = React.use(params);
  console.log(id);
//   const product = productData[id];
  const product = productData[1];

  if (!product) {
    return <p>Product not found!</p>;
  }

  const [selectedColor, setSelectedColor] = useState(Object.keys(product.colors)[0]);
  const [selectedSize, setSelectedSize] = useState(Object.keys(product.colors[selectedColor].sizes)[0]);
  const [selectedView, setSelectedView] = useState(
    Object.keys(product.colors[selectedColor].views)[0]
  );
  const [availabilityStatus, setAvailabilityStatus] = useState(null);
  const [selectedSizeData, setSelectedSizeData] = useState(null);

  const selectedColorData = product.colors[selectedColor];

  // Update the selected size data based on the current color and size
  useEffect(() => {
    const sizeData = selectedColorData.sizes[selectedSize];
    setSelectedSizeData(sizeData);
    setAvailabilityStatus(sizeData ? sizeData.availability : null);
  }, [selectedColor, selectedSize]);

  // Collect all possible sizes across colors
  const allSizes = Object.values(product.colors).reduce((acc, colorData) => {
    Object.keys(colorData.sizes).forEach((size) => {
      if (!acc.includes(size)) acc.push(size);
    });
    return acc;
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-6 flex">
      <div className="flex flex-col gap-4 mr-6">
        {Object.entries(selectedColorData.views).map(([view, imgUrl]) => (
          <Image
            key={view}
            src={imgUrl}
            alt={`${view} view`}
            width={80}
            height={80}
            className={`rounded-md cursor-pointer hover:scale-110 transform duration-200 ${
              selectedView === view ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedView(view)}
          />
        ))}
      </div>
      <Card className="flex-1 shadow-xl">
        <CardContent className="p-4 flex gap-6">
          <div className="flex-[0.6]">
            <Image
              src={selectedColorData.views[selectedView]}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="flex-[0.4]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
              <CardDescription className="text-gray-600">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-4">
              <div className="flex flex-col gap-4">
                {selectedSizeData ? (
                  <>
                    <p className="text-xl font-semibold">{`Tk ${selectedSizeData.price}`}</p>
                    <p className="text-sm text-gray-700">{`Availability: ${selectedSizeData.availability}`}</p>
                  </>
                ) : (
                  <p className="text-sm text-gray-700">Size unavailable</p>
                )}

                <div>
                  <h4 className="text-lg font-semibold">Available Colors:</h4>
                  <div className="flex gap-4 mt-4">
                    {Object.entries(product.colors).map(([color, colorData]) => (
                      <Image
                        key={color}
                        src={colorData.image}
                        alt={`${color} color`}
                        width={80}
                        height={80}
                        className={`rounded-md cursor-pointer hover:scale-110 transform duration-200 ${
                          selectedColor === color ? "ring-2 ring-blue-500" : ""
                        }`}
                        onClick={() => {
                          setSelectedColor(color);
                          setSelectedSize(Object.keys(colorData.sizes)[0]);
                          setSelectedView(Object.keys(colorData.views)[0]); // Reset to first view of selected color
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Choose Size:</h4>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {allSizes.map((size) => {
                      // Check if the size is available for the selected color
                      const sizeData = selectedColorData.sizes[size];
                      const isAvailable = sizeData && sizeData.availability !== "Out of Stock";

                      return (
                        <Button
                          key={size}
                          className={`px-4 py-2 text-sm ${
                            selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
                          }`}
                          onClick={() => setSelectedSize(size)}
                          disabled={!isAvailable} // Disable button if the size is unavailable
                        >
                          {size}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <Button
                  className="mt-4"
                  disabled={selectedSizeData?.availability === "Out of Stock"}
                >
                  <ShoppingCart className="mr-2" />
                  {selectedSizeData?.availability === "Out of Stock"
                    ? "Out of Stock"
                    : "Add to Cart"}
                </Button>
              </div>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
