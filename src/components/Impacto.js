
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Impacto() {
  const impactos = [
    { ods: 'ODS 1', beneficio: 'Reducción de la pobreza' },
    { ods: 'ODS 4', beneficio: 'Educación de calidad' },
    { ods: 'ODS 10', beneficio: 'Reducción de las desigualdades' },
  ]

  return (
    <section id="impacto" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">Nuestro Impacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactos.map((impacto, index) => (
            <Card key={index} className="bg-[#F5F5DC] shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#8B4513]">{impacto.ods}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#333333]">{impacto.beneficio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}