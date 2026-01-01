export type Skill = {
  name: string
  picture?: string
}

export const languages: Skill[] = [
  { name: 'Python', picture: '/skills/language/python-logo.png' },
  { name: 'Java', picture: '/skills/language/java-logo.png' },
  { name: 'PHP', picture: '/skills/language/php-logo.png' },
  { name: 'Dart', picture: '/skills/language/dart-logo.png' },
  { name: 'HTML', picture: '/skills/language/html-logo.png' },
  { name: 'CSS', picture: '/skills/language/css-logo.png' },
]

export const frameworks: Skill[] = [
  { name: 'Flutter', picture: '/skills/framework/flutter-logo.png' },
  { name: 'Next.js', picture: '/skills/framework/next.js-logo.png' },
  { name: 'Flask', picture: '/skills/framework/flask-logo.png' },
  { name: 'Laravel', picture: '/skills/framework/laravel-logo.png' },
]

export const tools: Skill[] = [
  { name: 'Firebase', picture: '/skills/tool/firebase-logo.png' },
  { name: 'Canva', picture: '/skills/tool/canva-logo.png' },
  { name: 'Figma', picture: '/skills/tool/figma-logo.png' },
  { name: 'VS Code', picture: '/skills/tool/vs code-logo.png' },
  { name: 'GitHub', picture: '/skills/tool/github-logo.png' },
  { name: 'Postman', picture: '/skills/tool/postman-logo.png' },
]
