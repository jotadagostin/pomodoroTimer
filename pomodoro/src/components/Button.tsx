type ButtonProps = {
  running: boolean;
  onToggle: () => void;
};

export function Button({ running, onToggle }: ButtonProps) {
  return (
    <div>
      <button
        className="text-[var(--text-default-inverse)] bg-[var(--text-primary)] px-6 py-2 rounded-md cursor-pointer hover:bg-[var(--bg-primary)]"
        onClick={onToggle}
      >
        {running ? "Pause" : "Start"}
      </button>
    </div>
  );
}
