import { TreeView, useNodes, useMultiSelection } from "react-arborist";
import { gmailData } from "../data/gmail";
import { useState } from "react";

export default function Version4() {
  const nodes = useNodes(gmailData, {
    id: (d) => d.id,
    isLeaf: (d) => !d.children,
  });

  const [opensValue, setOpens] = useState({});
  const [editValue, setEditValue] = useState<string | null>(null);
  const selection = useMultiSelection();
  // return <p>Reset</p>;
  return (
    <div>
      {
        <TreeView
          openByDefault
          nodes={nodes}
          selection={selection}
          opens={{
            value: opensValue,
            onChange: (e) => setOpens(e.value),
          }}
          edit={{
            value: editValue,
            onChange: (e) => setEditValue(e.value),
          }}
        />
      }
    </div>
  );
}