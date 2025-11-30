import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type Section = 'home' | 'about' | 'copper' | 'aluminum' | 'news' | 'contacts' | 'partnership' | 'dealers' | 'gallery';

const productionImages = [
  { id: 1, url: 'https://cdn.poehali.dev/projects/65b07cf6-29a0-4af5-81c8-8ac736ac9f73/files/2812d7eb-15c0-4c6e-94a1-9387c09a13c2.jpg', title: 'Медное производство', description: 'Литейный цех медного дивизиона' },
  { id: 2, url: 'https://cdn.poehali.dev/projects/65b07cf6-29a0-4af5-81c8-8ac736ac9f73/files/78cde790-52d6-48b0-a79e-f42e7d35a264.jpg', title: 'Алюминиевый завод', description: 'Современное оборудование для производства алюминия' },
  { id: 3, url: 'https://cdn.poehali.dev/projects/65b07cf6-29a0-4af5-81c8-8ac736ac9f73/files/7892cd9b-ad45-4eb8-aef3-d30ddd8cfd89.jpg', title: 'Литейный процесс', description: 'Заливка расплавленного металла' },
  { id: 4, url: 'https://cdn.poehali.dev/projects/65b07cf6-29a0-4af5-81c8-8ac736ac9f73/files/7ea7b1f8-30ff-474d-85d3-7237e64a1834.jpg', title: 'Контроль качества', description: 'Лаборатория тестирования продукции' },
];

const copperProducts = [
  { id: 1, name: 'Медная катанка M1', diameter: '8 мм', standard: 'ГОСТ 859-2001', weight: '3000 кг' },
  { id: 2, name: 'Медный пруток M2', diameter: '20 мм', standard: 'ГОСТ 1535-2006', weight: '2500 кг' },
  { id: 3, name: 'Медная лента М3', thickness: '0.5 мм', standard: 'ГОСТ 1173-2006', weight: '1500 кг' },
  { id: 4, name: 'Медная втулка БрАЖ9-4', diameter: '50 мм', standard: 'ГОСТ 613-79', weight: '1000 кг' },
  { id: 5, name: 'Медный слиток М1', weight: '25 кг', standard: 'ГОСТ 193-79', quantity: '200 шт' },
];

const aluminumProducts = [
  { id: 1, name: 'Алюминиевая чушка А7', weight: '22 кг', standard: 'ГОСТ 11069-2001', purity: '99.7%' },
  { id: 2, name: 'Алюминиевый лист АМг5', thickness: '3 мм', standard: 'ГОСТ 21631-76', weight: '2000 кг' },
  { id: 3, name: 'Алюминиевый профиль АД31', size: '40x40 мм', standard: 'ГОСТ 8617-81', length: '6 м' },
  { id: 4, name: 'Алюминиевая проволока СвАК5', diameter: '1.6 мм', standard: 'ГОСТ 7871-75', weight: '500 кг' },
  { id: 5, name: 'Алюминиевый круг Д16', diameter: '120 мм', standard: 'ГОСТ 21488-97', weight: '1800 кг' },
];

const news = [
  { id: 1, date: '15.11.2025', title: 'Расширение медного производства', content: 'Запущена новая линия по производству медной катанки мощностью 5000 тонн в год.' },
  { id: 2, date: '10.11.2025', title: 'Получена международная сертификация', content: 'Алюминиевый дивизион получил сертификат ISO 9001:2015.' },
  { id: 3, date: '05.11.2025', title: 'Партнерство с ведущими заводами', content: 'Заключены контракты на поставку продукции в 15 регионов России.' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productionImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#0EA5E9] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">ЛЦМ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1A1F2C]">Литье Цветных Металлов</h1>
                <p className="text-xs text-gray-600">Качество с 1985 года</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-1">
              <Button variant="ghost" onClick={() => scrollToSection('home')} className="text-sm">
                <Icon name="Home" size={16} className="mr-1" />
                Главная
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-sm">
                <Icon name="Building2" size={16} className="mr-1" />
                О компании
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('copper')} className="text-sm text-[#F97316]">
                <Icon name="Sparkles" size={16} className="mr-1" />
                Медный дивизион
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('aluminum')} className="text-sm text-[#0EA5E9]">
                <Icon name="Zap" size={16} className="mr-1" />
                Алюминиевый
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('news')} className="text-sm">
                <Icon name="Newspaper" size={16} className="mr-1" />
                Новости
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('partnership')} className="text-sm">
                <Icon name="Handshake" size={16} className="mr-1" />
                Сотрудничество
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('dealers')} className="text-sm">
                <Icon name="MapPin" size={16} className="mr-1" />
                Дилеры
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('gallery')} className="text-sm">
                <Icon name="Image" size={16} className="mr-1" />
                Галерея
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('contacts')} className="text-sm">
                <Icon name="Mail" size={16} className="mr-1" />
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex flex-col">
          <div className="relative h-[500px] overflow-hidden">
            {productionImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-10 left-0 right-0 text-center text-white z-10">
                  <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg">{image.description}</p>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {productionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + productionImages.length) % productionImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-colors z-20"
            >
              <Icon name="ChevronLeft" size={24} className="text-white" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % productionImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-colors z-20"
            >
              <Icon name="ChevronRight" size={24} className="text-white" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-[#F97316]/10 via-[#9b87f5]/10 to-[#0EA5E9]/10">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#F97316] via-[#9b87f5] to-[#0EA5E9] bg-clip-text text-transparent">
                  Лидер в производстве цветных металлов
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Медь и алюминий высочайшего качества для промышленности России и СНГ. 
                  Современные технологии литья и многолетний опыт работы.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" onClick={() => scrollToSection('copper')} className="bg-[#F97316] hover:bg-[#ea580c] text-white shadow-xl">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Медный дивизион
                  </Button>
                  <Button size="lg" onClick={() => scrollToSection('aluminum')} className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white shadow-xl">
                    <Icon name="Zap" size={20} className="mr-2" />
                    Алюминиевый дивизион
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="shadow-xl">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12 text-[#1A1F2C]">О компании</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:shadow-2xl transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#ea580c] flex items-center justify-center mb-4 shadow-lg">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">40+ лет опыта</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">С 1985 года мы производим высококачественную продукцию из цветных металлов для различных отраслей промышленности.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-2xl transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] flex items-center justify-center mb-4 shadow-lg">
                    <Icon name="Factory" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Современное производство</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Оснащение последнего поколения и передовые технологии литья обеспечивают стабильное качество продукции.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-2xl transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] flex items-center justify-center mb-4 shadow-lg">
                    <Icon name="Globe" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">География поставок</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Работаем со всеми регионами России и странами СНГ. Надежная логистика и своевременные поставки.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="copper" className="py-24 bg-gradient-to-br from-[#F97316]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#ea580c] flex items-center justify-center shadow-xl">
                    <Icon name="Sparkles" size={32} className="text-white" />
                  </div>
                  <h2 className="text-5xl font-bold text-[#F97316]">Медный дивизион</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Полный спектр медной продукции: от катанки до готовых изделий
                </p>
              </div>
              <Card className="shadow-2xl border-2 border-[#F97316]/20">
                <CardHeader className="bg-gradient-to-r from-[#F97316]/10 to-transparent">
                  <CardTitle className="text-2xl text-[#F97316]">Номенклатура медной продукции</CardTitle>
                  <CardDescription>Все позиции сертифицированы и соответствуют ГОСТам</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#F97316]/5">
                        <TableHead className="font-bold">Наименование</TableHead>
                        <TableHead className="font-bold">Размер/Диаметр</TableHead>
                        <TableHead className="font-bold">Стандарт</TableHead>
                        <TableHead className="font-bold">Доступно</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {copperProducts.map((product) => (
                        <TableRow key={product.id} className="hover:bg-[#F97316]/5 transition-colors">
                          <TableCell className="font-semibold">{product.name}</TableCell>
                          <TableCell>{product.diameter || product.thickness}</TableCell>
                          <TableCell>{product.standard}</TableCell>
                          <TableCell className="text-[#F97316] font-semibold">{product.weight || product.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="aluminum" className="py-24 bg-gradient-to-br from-[#0EA5E9]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] flex items-center justify-center shadow-xl">
                    <Icon name="Zap" size={32} className="text-white" />
                  </div>
                  <h2 className="text-5xl font-bold text-[#0EA5E9]">Алюминиевый дивизион</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Широкий ассортимент алюминиевых изделий для любых задач
                </p>
              </div>
              <Card className="shadow-2xl border-2 border-[#0EA5E9]/20">
                <CardHeader className="bg-gradient-to-r from-[#0EA5E9]/10 to-transparent">
                  <CardTitle className="text-2xl text-[#0EA5E9]">Номенклатура алюминиевой продукции</CardTitle>
                  <CardDescription>Высокая чистота и соответствие международным стандартам</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#0EA5E9]/5">
                        <TableHead className="font-bold">Наименование</TableHead>
                        <TableHead className="font-bold">Характеристики</TableHead>
                        <TableHead className="font-bold">Стандарт</TableHead>
                        <TableHead className="font-bold">Параметры</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aluminumProducts.map((product) => (
                        <TableRow key={product.id} className="hover:bg-[#0EA5E9]/5 transition-colors">
                          <TableCell className="font-semibold">{product.name}</TableCell>
                          <TableCell>{product.thickness || product.size || product.diameter}</TableCell>
                          <TableCell>{product.standard}</TableCell>
                          <TableCell className="text-[#0EA5E9] font-semibold">{product.purity || product.weight || product.length}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="news" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12 text-[#1A1F2C]">Новости компании</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {news.map((item, index) => (
                <Card key={item.id} className="border-2 hover:shadow-xl transition-all hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] flex items-center justify-center shadow-lg">
                          <Icon name="Newspaper" size={24} className="text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="partnership" className="py-24 bg-gradient-to-br from-[#9b87f5]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] flex items-center justify-center mb-6 mx-auto shadow-xl">
                <Icon name="Handshake" size={40} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-6 text-[#1A1F2C]">Сотрудничество</h2>
              <p className="text-xl text-gray-600 mb-12">
                Мы открыты к долгосрочному партнерству с производителями, дистрибьюторами и торговыми компаниями
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="TrendingUp" size={24} className="text-[#9b87f5]" />
                      Преимущества партнерства
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-left space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Гибкая система скидок</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Отсрочка платежа</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Маркетинговая поддержка</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Приоритет в поставках</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="FileText" size={24} className="text-[#9b87f5]" />
                      Условия сотрудничества
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-left space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Минимальный заказ от 1 тонны</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Доставка по всей России</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Полный пакет документов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      <span>Техническая поддержка 24/7</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="dealers" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F97316] via-[#9b87f5] to-[#0EA5E9] flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <Icon name="MapPin" size={40} className="text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6 text-[#1A1F2C]">Наши дилеры</h2>
                <p className="text-xl text-gray-600">Разветвленная дилерская сеть по всей стране</p>
              </div>
              <Tabs defaultValue="central" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="central">Центр</TabsTrigger>
                  <TabsTrigger value="south">Юг</TabsTrigger>
                  <TabsTrigger value="siberia">Сибирь</TabsTrigger>
                  <TabsTrigger value="east">Восток</TabsTrigger>
                </TabsList>
                <TabsContent value="central" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>ООО "МеталлТорг"</CardTitle>
                      <CardDescription>г. Москва, ул. Промышленная, 15</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Phone" size={16} />
                        <span>+7 (495) 123-45-67</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>ЗАО "СплавСервис"</CardTitle>
                      <CardDescription>г. Санкт-Петербург, пр. Металлургов, 89</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Phone" size={16} />
                        <span>+7 (812) 234-56-78</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="south" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>ИП "ЮгМеталл"</CardTitle>
                      <CardDescription>г. Ростов-на-Дону, ул. Заводская, 42</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Phone" size={16} />
                        <span>+7 (863) 345-67-89</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="siberia" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>ООО "СибСплав"</CardTitle>
                      <CardDescription>г. Новосибирск, ул. Индустриальная, 23</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Phone" size={16} />
                        <span>+7 (383) 456-78-90</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="east" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>ПАО "ВостокМет"</CardTitle>
                      <CardDescription>г. Владивосток, ул. Портовая, 67</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Phone" size={16} />
                        <span>+7 (423) 567-89-01</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F97316] via-[#9b87f5] to-[#0EA5E9] flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <Icon name="Image" size={40} className="text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6 text-[#1A1F2C]">Галерея производства</h2>
                <p className="text-xl text-gray-600">Наши производственные мощности и технологии</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {productionImages.map((image, index) => (
                  <Card key={image.id} className="border-2 overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Icon name="Factory" size={24} className={index % 2 === 0 ? "text-[#F97316]" : "text-[#0EA5E9]"} />
                        {image.title}
                      </CardTitle>
                      <CardDescription className="text-base">{image.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <Icon name="Mail" size={40} className="text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6 text-[#1A1F2C]">Контакты</h2>
                <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Головной офис</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-[#9b87f5] mt-1" />
                      <div>
                        <p className="font-semibold">Адрес:</p>
                        <p className="text-gray-600">г. Москва, ул. Литейная, д. 45</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-[#9b87f5] mt-1" />
                      <div>
                        <p className="font-semibold">Телефон:</p>
                        <p className="text-gray-600">+7 (495) 777-88-99</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-[#9b87f5] mt-1" />
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-gray-600">info@litecvetmet.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Производство</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Factory" size={20} className="text-[#F97316] mt-1" />
                      <div>
                        <p className="font-semibold">Медный завод:</p>
                        <p className="text-gray-600">Московская обл., г. Электросталь</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Factory" size={20} className="text-[#0EA5E9] mt-1" />
                      <div>
                        <p className="font-semibold">Алюминиевый завод:</p>
                        <p className="text-gray-600">Ленинградская обл., г. Кингисепп</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-[#9b87f5] mt-1" />
                      <div>
                        <p className="font-semibold">Режим работы:</p>
                        <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 border-2 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-[#9b87f5]/10 to-transparent">
                  <CardTitle className="text-2xl text-[#9b87f5]">Отправить заявку</CardTitle>
                  <CardDescription>Заполните форму и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите о вашей потребности в продукции..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#0EA5E9] flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">ЛЦМ</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Литье Цветных Металлов</h3>
                  <p className="text-sm text-gray-400">С 1985 года</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Надежный партнер в производстве и поставках цветных металлов</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-[#F97316] cursor-pointer transition-colors">Медная катанка</li>
                <li className="hover:text-[#F97316] cursor-pointer transition-colors">Медные прутки и ленты</li>
                <li className="hover:text-[#0EA5E9] cursor-pointer transition-colors">Алюминиевые чушки</li>
                <li className="hover:text-[#0EA5E9] cursor-pointer transition-colors">Алюминиевый профиль</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 777-88-99</li>
                <li>info@litecvetmet.ru</li>
                <li>г. Москва, ул. Литейная, 45</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Литье Цветных Металлов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}