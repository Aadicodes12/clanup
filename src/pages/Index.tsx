import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';
// Removed import TrustedLogos
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {/* Your existing content */}
      
      {/* Example usage if any - ensure no reference to TrustedLogos here */}
    </div>
  );
};

export default Index;