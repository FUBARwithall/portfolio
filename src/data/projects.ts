export type Project = {
  title: string
  role: string
  description: string
  tech: string[]
  color: string
  img: string
}

export const projects: Project[] = [
  {
    title: 'Daring Membaca',
    role: 'Full Stack Developer',
    description:
      'A simple and intuitive java based library app for those who want to read books.',
    tech: ['Java', 'MongoDB'],
    color: 'border-green-500',
    img: '/projects/Daring membaca.png',
  },
  {
    title: 'EN-ID Translator',
    role: 'Full Stack Developer',
    description:
      'AI powered English to Indonesian translator using Dataset from SEACROWD and Helsinki model for training.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    color: 'border-red-500',
    img: '/projects/EN - ID Translator.png',
  },
  {
    title: 'KueQ',
    role: 'Full Stack Developer',
    description:
      'E-commerce for selling electronic products with a user-friendly interface and secure payment options.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    color: 'border-violet-500',
    img: '/projects/KueQ.png',
  },
  {
    title: 'PPM',
    role: 'Full Stack Developer',
    description:
      'A web profile project for helping local businesses to promote their products.',
    tech: ['Flask', 'SQLite'],
    color: 'border-yellow-500',
    img: '/projects/PPM.png',
  },
]
