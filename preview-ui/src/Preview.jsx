import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export default function CourseDetailsCard() {
  return (
    <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <CardHeader className="p-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <CardTitle className="text-xl font-semibold truncate">Python | Sıfırdan İleri Seviye Programlama</CardTitle>
        <CardDescription className="text-gray-700 text-base">Mustafa Murat Coşkun</CardDescription>
      </CardContent>
      <CardFooter className="px-4 py-4">
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-lg ml-1">4.5</span>
          <span className="text-gray-600 ml-2">(48.060)</span>
        </div>
        <Badge variant="solid" className="text-sm bg-blue-500 text-white py-1 px-2 rounded">
          En çok satan
        </Badge>
        <div className="text-xl font-bold text-gray-900 mt-2">₺349,99</div>
      </CardFooter>
    </Card>
  );
}