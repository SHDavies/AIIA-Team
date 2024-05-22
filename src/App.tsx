import Modal from "./Modal"
import TeamMember, { Member } from "./TeamMember"
import { useEffect, useState } from "preact/hooks"

export function App() {
  const [team, setTeam] = useState<Member[]>([])
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const fetchTeamData = async () => {
    const response = await fetch("https://cdn.jsdelivr.net/gh/SHDavies/aiia-team@main/dist/s/team.json")
    const teamData: Member[] = await response.json()
    setTeam(teamData)
  }

  const memberClicked = (m: Member) => {
    return () => {
      if (m) {
        document.body.classList.add("modal-open")
      }
      setSelectedMember(m)
    }
  }

  const closeModal = () => {
    document.body.classList.remove("modal-open")
    setSelectedMember(null)
  }

  useEffect(() => {
    fetchTeamData()
  }, [])

  return (
    <div class="w-[80vw] m-auto flex flex-wrap justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {team.map((t) => (
        <TeamMember member={t} onClick={memberClicked(t)} />
      ))}
      {selectedMember ? <Modal member={selectedMember} onClose={closeModal} /> : <></>}
    </div>
  )
}
