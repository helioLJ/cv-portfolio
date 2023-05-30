'use client'
import { Copy } from 'lucide-react'
import copy from 'clipboard-copy'
import { useEffect, useState } from 'react'

interface CopyButtonProps {
  content: string
}

export default function CopyButton({ content }: CopyButtonProps) {
  const [show, setShow] = useState(false)

  function handleCopy() {
    copy(content)
    setShow(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }, [show])

  return (
    <button
      onClick={handleCopy}
      className="relative flex justify-end gap-2.5 transition-opacity hover:opacity-40"
    >
      {content}
      <Copy className="stroke-1 text-zinc-900" />
      <div
        className={`absolute -right-5 -top-7 rounded-md bg-green-500 px-2 py-1 text-xs text-white ${
          show ? 'opacity-1' : 'opacity-0'
        } transition-opacity`}
      >
        Copiado!
      </div>
    </button>
  )
}
