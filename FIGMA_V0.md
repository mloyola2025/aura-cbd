# Figma + v0 workflow

This project is ready for the usual Figma to v0 to codebase flow.

1. Open v0 and upload a Figma frame, screenshot, or design reference.
2. Ask v0 to generate the component using Next.js, Tailwind CSS, shadcn/ui, and lucide-react.
3. Use v0's "Add to Codebase" command from the generated project.
4. Run that command from this folder: `C:\Users\Samhe\Documents\aura cbd\aura-app`.

For shadcn components, use:

```powershell
npm run v0 -- add <component-id>
```

Or paste the v0 "Add to Codebase" command directly:

```powershell
npx shadcn@latest add "https://v0.dev/chat/b/<project-id>?token=<token>"
```
