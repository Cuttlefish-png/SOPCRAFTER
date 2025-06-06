import React from 'react';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ 
  value, 
  onValueChange, 
  children 
}) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        
        if (child.type === TabsList || child.type === TabsContent) {
          return React.cloneElement(child, { value, ...(child.props as any) });
        }
        
        return child;
      })}
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ 
  children, 
  value, 
  onValueChange,
  className = ""
}) => {
  return (
    <div className={`flex space-x-1 bg-slate-100 p-1 rounded-lg ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child) || child.type !== TabsTrigger) return null;
        
        return React.cloneElement(child, {
          selected: child.props.value === value,
          onClick: () => onValueChange?.(child.props.value),
          ...(child.props as any)
        });
      })}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value, 
  selected, 
  onClick, 
  children 
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition-all ${
        selected 
          ? 'bg-white shadow-sm text-red-600' 
          : 'text-slate-600 hover:text-slate-900'
      }`}
      onClick={onClick}
      role="tab"
      aria-selected={selected}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  activeValue?: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ 
  value, 
  children 
}) => {
  // Get the value from the context
  const isActive = value === globalThis?.activeValue;
  
  if (!isActive) return null;
  
  return <div className="animate-fadeIn">{children}</div>;
};

// Monkey patch to pass the active value
(globalThis as any).activeValue = null;

// Add TabsContent handler to update based on parent Tabs
TabsContent.displayName = 'TabsContent';
const originalTabsContent = TabsContent;
export const TabsContent$ = ({ value, children, ...props }: TabsContentProps) => {
  // This will use the value from the parent Tabs component
  const isActive = value === (globalThis as any).activeValue;
  return isActive ? <div className="animate-fadeIn" {...props}>{children}</div> : null;
};

// Override the original component
Object.assign(TabsContent, {
  ...originalTabsContent,
  render: (props: any) => {
    const isActive = props.value === (globalThis as any).activeValue;
    return isActive ? <div className="animate-fadeIn">{props.children}</div> : null;
  }
});