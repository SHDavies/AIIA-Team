export interface Member {
  name: string
  role: string
  email?: string
  image: string
  bio: string
  imgPosition: Record<string, string>
}

interface TeamMemberProps {
  member: Member
  onClick: () => void
}

export default function TeamMember({ member, onClick }: TeamMemberProps) {
  return (
    <div
      onClick={onClick}
      class="w-[80vw] sm:w-[38vw] lg:w-[25vw] xl:w-[19vw] rounded-2xl overflow-hidden text-center px-6 py-4 cursor-pointer hover:bg-slate-200 transition-colors duration-300"
    >
      <div class="w-[65vw] h-[65vw] sm:w-[30vw] sm:h-[30vw] lg:w-[18vw] lg:h-[18vw] xl:w-[14vw] xl:h-[14vw] relative overflow-hidden rounded-full m-auto mb-3">
        <img src={"/s/" + member.image} alt={member.name} class="inline relative" style={{ ...member.imgPosition }} />
      </div>
      <div>
        <div class="font-bold text-xl">{member.name}</div>
        <div>{member.role}</div>
        {member.email ? <div>{member.email}</div> : <></>}
      </div>
    </div>
  )
}
