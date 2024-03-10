import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Copy from "./copy";

const customStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  borderRadius: "5px",
  padding: "20px",
  paddingTop: "40px",
};

interface CodeBlockProps {
  value: {
    language?: string;
    code: string;
  };
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ value }) => {
  const { language, code } = value;
  const languageLower = language?.toLowerCase() || "none";

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={languageLower}
        style={vscDarkPlus}
        customStyle={customStyle}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      <Copy code={code} />
    </div>
  );
};
