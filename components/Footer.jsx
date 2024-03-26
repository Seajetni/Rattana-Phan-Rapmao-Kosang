import React from 'react'
import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex justify-center">
      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        @ Copyright &copy; 2026. ห้างหุ้นส่วนจำกัด รัตนพรรณรับเหมาก่อสร้าง. .
      </p>
    </div>
  </div>
</footer>
  )
}
