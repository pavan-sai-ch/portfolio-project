"use client";

import { TerminalLine } from "@/types";
import { cliConfig, personalInfo, experience, projects, skills } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Terminal() {
    const [lines, setLines] = useState<TerminalLine[]>([
        { type: "output", content: cliConfig.welcomeMessage },
    ]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom when lines change
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);

    // Focus input on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const executeCommand = (command: string): string => {
        const parts = command.trim().toLowerCase().split(" ");
        const cmd = parts[0];
        const args = parts.slice(1);

        switch (cmd) {
            case "help":
                return cliConfig.helpText;
            case "ls":
                return `${cliConfig.listings.join("\n")}`;
            case "pwd":
                return cliConfig.currentDir;
            case "cat":
                if (args.length === 0) return "Usage: cat <file>";
                const file = args[0];
                if (file in cliConfig.files) {
                    return cliConfig.files[file as keyof typeof cliConfig.files];
                }
                return `cat: ${file}: No such file or directory`;
            case "about":
                return `Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Email: ${personalInfo.email}

${personalInfo.bio}

Experience: ${experience.length} roles
Projects: ${projects.length} projects`;
            case "clear":
                setLines([]);
                setInput("");
                return "";
            case "skills":
                return `Languages: ${skills.languages.join(", ")}
Frontend: ${skills.frontend.join(", ")}
Backend: ${skills.backend.join(", ")}
Tools: ${skills.tools.join(", ")}`;
            case "projects":
                return projects.map(p => `${p.title}: ${p.tags.join(", ")}`).join("\n");
            case "experience":
                return experience.map(e => `${e.role} @ ${e.company}`).join("\n");
            case "contact":
                return `Email: ${personalInfo.email}
LinkedIn: ${personalInfo.links.linkedin}
GitHub: ${personalInfo.links.github}
Resume: ${personalInfo.links.resume}`;
            case "":
                return "";
            default:
                return `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user input
        const newLines: TerminalLine[] = [...lines, { type: "input", content: `$ ${input}` }];

        // Special case for clear command
        if (input.trim().toLowerCase() === "clear") {
            setLines([]);
            setInput("");
            return;
        }

        // Execute command and add output
        const output = executeCommand(input);
        if (output) {
            newLines.push({ type: "output", content: output });
        }

        setLines(newLines);
        setHistory(prev => [input.trim(), ...prev]);
        setHistoryIndex(-1);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setHistoryIndex(prev => {
                const next = Math.min(prev + 1, history.length - 1);
                setInput(history[next] ?? "");
                return next;
            });
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setHistoryIndex(prev => {
                const next = prev - 1;
                setInput(next < 0 ? "" : history[next] ?? "");
                return Math.max(next, -1);
            });
        }
    };

    return (
        <section id="terminal" className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div
                    ref={terminalRef}
                    className="terminal-container min-h-96 max-h-96 overflow-y-auto p-6 rounded-lg shadow-2xl"
                >
                    {lines.map((line, index) => (
                        <div key={index} className="mb-2">
                            {line.type === "input" ? (
                                <div className="text-blue-400 font-semibold">
                                    {line.content}
                                </div>
                            ) : (
                                <div className="text-green-400 whitespace-pre-wrap break-words">
                                    {line.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg px-4 py-2">
                        <span className="text-blue-400 font-semibold mr-2">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={() => inputRef.current?.focus()}
                            className="flex-1 bg-transparent text-green-400 outline-none font-mono terminal-input"
                            placeholder="Type command here..."
                            autoComplete="off"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}



