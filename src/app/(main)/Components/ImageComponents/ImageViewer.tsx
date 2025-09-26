'use client';
import React, { useState, useRef, useEffect } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Modal from "../ModalOverlay";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import "../../styles/imageViewer.css";

interface ImageViewerProps {
  images: string[];
  isOpen: boolean;
  close: () => void;
  initIndex?: number;
}

const ImageViewer = ({ images, isOpen, close, initIndex = 0 }: ImageViewerProps) => {
  const [index, setIndex] = useState<number>(initIndex);
  const [inputValue, setInputValue] = useState<string>((initIndex + 1).toString());
  const [loading, setLoading] = useState<boolean>(true);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize index if initIndex changes
  useEffect(() => {
    setIndex(initIndex);
    setInputValue((initIndex + 1).toString());
    setLoading(true);
  }, [initIndex]);

  // Scroll thumbnails and update input when index changes
  useEffect(() => {
    setLoading(true);
    thumbnailRef.current?.scrollTo({ left: index * 4.5 * 16 });
    setInputValue((index + 1).toString());
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, isOpen, close]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleInputChange = (value: string) => {
    const val = Number(value);
    if (val > 0 && val <= images.length && !isNaN(val)) {
      setIndex(val - 1);
    } else {
      setInputValue((index + 1).toString());
    }
  };

  return (
    <Modal state={isOpen}>
      <TransformWrapper initialScale={1} centerOnInit centerZoomedOut>
        {({ zoomIn, zoomOut, centerView, resetTransform }) => (
          <>
            {loading && (
              <svg
                aria-hidden="true"
                className="absolute left-[calc(50%_-_1rem)] top-[calc(50%_-_1rem)] h-8 w-8 animate-spin fill-white text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            {/* Close Button */}
            <button
              onClick={() => {
                centerView(1);
                close();
              }}
              className="absolute right-3 top-7 z-[80] grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-md hover:bg-black hover:text-white"
            >
              <span className="text-xl">×</span>
            </button>

            {/* Previous/Next */}
            <button
              onClick={() => {
                setLoading(true);
                setIndex((i) => Math.max(i - 1, 0));
                resetTransform();
                timeoutRef.current = setTimeout(() => centerView(1, 1, "linear"), 100);
              }}
              className="absolute left-0 top-1/2 z-[80] grid h-32 w-16 -translate-y-1/2 place-items-center md:left-8 md:h-12 md:w-12 md:bg-white md:text-black md:hover:bg-black md:hover:text-white"
            >
              <PiCaretLeftBold />
            </button>
            <button
              onClick={() => {
                setLoading(true);
                setIndex((i) => Math.min(i + 1, images.length - 1));
                resetTransform();
                timeoutRef.current = setTimeout(() => centerView(1, 1, "linear"), 100);
              }}
              className="absolute right-0 top-1/2 z-[80] grid h-32 w-16 -translate-y-1/2 place-items-center md:right-8 md:h-12 md:w-12 md:bg-white md:text-black md:hover:bg-black md:hover:text-white"
            >
              <PiCaretRightBold />
            </button>

            {/* Toolbar */}
            <div className="absolute left-1/2 top-7 z-[80] flex -translate-x-1/2 items-center gap-2 rounded-3xl bg-white shadow-md">
              <button
                onClick={zoomIn}
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-black hover:bg-black hover:text-white"
              >
                <BiZoomIn />
              </button>
              <div className="flex px-3">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && handleInputChange(e.currentTarget.value)}
                  onBlur={(e) => handleInputChange(e.target.value)}
                  className="w-10 text-center border rounded"
                />
                <span> / {images.length}</span>
              </div>
              <button
                onClick={zoomOut}
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-black hover:bg-black hover:text-white"
              >
                <BiZoomOut />
              </button>
            </div>

            {/* Main Image */}
            <div
              className={`absolute left-1/2 top-[calc(50%+2.5rem)] z-[70] -translate-x-1/2 -translate-y-1/2 transition-all md:top-[calc(50%+1.5rem)] ${
                isOpen ? "scale-100" : "scale-0"
              }`}
            >
              <div className="grid h-[calc(90vh-5rem)] w-screen place-items-center overflow-hidden md:h-[90vh] md:w-[90vw]">
                <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1} of ${images.length}`}
                    className={`h-[calc(90vh-7rem)] w-screen object-contain md:h-[90vh] md:w-[90vw] transition-opacity`}
                    style={{ opacity: loading ? 0 : 1 }}
                    onLoad={() => {
                      resetTransform();
                      timeoutRef.current = setTimeout(() => centerView(1, 1, "linear"), 100);
                      setLoading(false);
                    }}
                  />
                </TransformComponent>

                {/* Thumbnail strip */}
                <div className="mt-4 flex h-20 w-full max-w-full items-center">
                  <div
                    ref={thumbnailRef}
                    class                    ="imagescroll absolute mx-2 max-w-full shrink-0 basis-[4rem] overflow-x-scroll scroll-smooth whitespace-nowrap transition-transform"
                  >
                    {images.map((url, idx) => (
                      <div
                        key={idx}
                        className={`mx-1 my-4 inline-block h-16 w-16 cursor-pointer ${
                          idx === 0
                            ? "ml-[calc(50vw_-_2rem)] md:ml-5"
                            : idx === images.length - 1
                            ? "mr-5"
                            : ""
                        }`}
                      >
                        <img
                          src={url}
                          alt={`Thumbnail ${idx + 1}`}
                          className={`h-full w-full rounded-md object-cover transition-all hover:brightness-75 ${
                            idx === index ? "ring-4 ring-blue-400" : ""
                          }`}
                          onClick={() => {
                            setLoading(true);
                            setIndex(idx);
                            resetTransform();
                            timeoutRef.current = setTimeout(() => centerView(1, 1, "linear"), 100);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </TransformWrapper>
    </Modal>
  );
};

export default ImageViewer;

