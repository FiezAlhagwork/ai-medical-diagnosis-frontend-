import { LuActivity } from "react-icons/lu";
import type { LoadingProps } from "../../types";

const Loading = ({
  title = "جاري التحميل...",
  message,
  fullScreen = false,
  icon: Icon = LuActivity,
}: LoadingProps) => {
  const containerClass = fullScreen
    ? "min-h-screen flex items-center justify-center gradient-hero"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClass}>
      <div className="text-center relative ">
        {/* دوائر دوارة حول الأيقونة */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          {/* الدائرة الخارجية */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          
          {/* الدائرة الوسطى */}
          <div className="absolute inset-3 border-3 border-primary/15 rounded-full"></div>
          <div className="absolute inset-3 border-3 border-transparent border-r-primary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          
          {/* الدائرة الداخلية */}
          <div className="absolute inset-6 border-2 border-primary/10 rounded-full"></div>
          <div className="absolute inset-6 border-2 border-transparent border-b-primary rounded-full animate-spin" style={{ animationDuration: '0.8s' }}></div>
          
          {/* الأيقونة في الوسط */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center animate-pulse shadow-xl shadow-primary/30">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* النصوص */}
        {title && (
          <h2 className="text-md md:text-2xl font-bold mb-2 text-gray-800">
            {title}
          </h2>
        )}
        {message && (
          <p className="text-base md:text-lg font-semibold text-gray-600 mb-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Loading;

