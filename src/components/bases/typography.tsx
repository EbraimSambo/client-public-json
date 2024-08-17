"use client"
import { darkMode } from '@/hooks/atoms/theme'
import { useAtom } from 'jotai'
import React, { createElement, HTMLAttributes, ReactNode } from 'react'

interface TextProps {
  text: ReactNode,
  color?: "text-default" | "text-gray-800" | "text-black" | "text-gray-600" | "text-white" | "error" | "info",
  element: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"| "span"| "b"| "i",
  size?: "text-xs"| "text-sm" | "text-2xl"| "text-3xl" | "text-4xl"| "text-5xl" | "text-6xl"
  bold?: "font-bold"|"font-semibold",
  className?: string
}
const Typography: React.FC<TextProps> = ({ text, color, element, size, bold, className }) => {

  const [isDark] = useAtom(darkMode)

  return createElement(
    element,
    { className: `${isDark ? color === "text-white": color} ${size} ${bold} ${className} tracking-widest` }
    , text)

}

export default Typography