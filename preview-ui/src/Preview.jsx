import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
export default function UserProfileCard() {
  return (
    <div className="max-w-sm mx-auto">
      <Card>
        <CardHeader className="flex items-center space-x-4 bg-gray-100 p-4">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=faces&dpr=2&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>This is some information about the user.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="font-semibold">Full name</span>
              <span>John Doe</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="font-semibold">Email address</span>
              <span>john.doe@example.com</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="font-semibold">Phone number</span>
              <span>(123) 456-7890</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="font-semibold">Address</span>
              <span>123 Main St<br />Anytown, USA 12345</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}