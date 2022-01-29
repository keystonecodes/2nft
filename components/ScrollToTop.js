import React, { Component } from "react";
import Link from "next/link";
import { ArrowSmUpIcon } from "@heroicons/react/solid";

class ScrollToTop extends Component {
  state = {
    opacity: "0",
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        console.log(maxScroll)
        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          this.setState({ opacity: "1" });
          console.log(currentScrollPos)
        } else {
          this.setState({ opacity: "0" });
        }
      };
    }
  }

  render() {
    return (
      <div className="fixed top-[80px] right-[14px] sm:top-[23px] sm:left-[340px]">
        <Link href="#top">
          <a className="inline-flex items-center p-1 rounded-full border-2 border-gray-900 dark:border-white shadow-sm text-gray-900 dark:text-white bg-transparent transition-opacity hover:bg-[#9945FF] hover:dark:bg-[#14f195]">
            <ArrowSmUpIcon className="h-6 w-6" />
          </a>
        </Link>
      </div>
    );
  }
}

export default ScrollToTop;
