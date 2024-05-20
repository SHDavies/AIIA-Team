import { useEffect, useState } from "preact/hooks"
import Markdown from "react-markdown"
import { Member } from "./TeamMember"

export interface ModalProps {
  member: Member
  onClose: () => void
}

export default function Modal({ member, onClose }: ModalProps) {
  const [bio, setBio] = useState<string>()

  const fetchBio = async () => {
    const response = await fetch(`/s/${member.bio}`)
    const bioData: string = await response.text()
    setBio(bioData)
  }

  useEffect(() => {
    fetchBio()
  }, [])

  return (
    <>
      <div class="max-w-[40vw] fixed top-12 bg-white rounded-lg overflow-hidden z-20 animate-slide-in markdown">
        <div class="p-6 overflow-x-auto max-h-[60vh]">
          <h2 class="text-2xl text-slate-700 mb-6">{member.name}</h2>
          <Markdown>{bio}</Markdown>
        </div>
        <div class="w-full bg-white px-6 py-3 flex justify-center md:justify-end">
          <button
            class="text-white bg-red-500 hover:bg-red-600 transition-colors w-full md:w-auto rounded-md px-4 py-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <div class="bg-gray-500 opacity-30 fixed top-0 bottom-0 z-10 w-full" onClick={onClose}></div>
    </>
  )
}
