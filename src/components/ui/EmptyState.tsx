import type { IconType } from "react-icons/lib";
import { MdInbox } from "react-icons/md";
import Button from "./Button";
import type { EmptyStateProps } from "../../types";

const EmptyState = ({
  icon: Icon = MdInbox,
  title = "لا توجد بيانات",
  description = "لم يتم العثور على أي بيانات لعرضها",
  actionLabel,
  onAction,
  className = "",
}: EmptyStateProps) => {
  // Render icon - handle both IconType (function component) and ReactNode
  const renderIcon = () => {
    if (typeof Icon === "function") {
      // IconType from react-icons
      const IconComponent = Icon as IconType;
      return <IconComponent size={64} className="text-slate-400" />;
    }
    // ReactNode (JSX element, string, etc.)
    return <div className="text-6xl text-slate-400 flex items-center justify-center">{Icon}</div>;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}
    >
      <div className="mb-6 flex items-center justify-center">
        <div className="rounded-full bg-slate-100 p-6">
          {renderIcon()}
        </div>
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>

      {description && (
        <p className="mb-6 max-w-md text-sm text-slate-500">{description}</p>
      )}

      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

