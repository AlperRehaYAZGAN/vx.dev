import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Home, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
export default function UserProfileCard() {
  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
      <Card className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <CardHeader>
            <div className="flex items-center">
              <Avatar className="w-24 h-24 mr-4">
                <AvatarImage src="https://images.unsplash.com/photo-1605993439212-8e6b2b8a2c8f?w=800&dpr=2&q=80" />
                <AvatarFallback delayMs={600}>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl font-semibold">Jane Doe</CardTitle>
                <CardDescription className="text-gray-600">UI/UX Designer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mt-4 text-gray-700">
              <Home className="w-6 h-6 mr-2" />
              <span className="text-sm">New York, USA</span>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <Mail className="w-6 h-6 mr-2" />
              <span className="text-sm">jane.doe@example.com</span>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-sm">+123-456-7890</span>
            </div>
          </CardContent>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Badge variant="outline" className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Design</Badge>
          <Badge variant="outline" className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">User Experience</Badge>
        </div>
        <div className="px-6 py-4">
          <Button variant="outline" className="text-sm">Message</Button>
        </div>
      </Card>
    </div>
  );
}