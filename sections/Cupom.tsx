import { HTMLWidget as HTML } from "apps/admin/widgets.ts";

interface Props {
    /** @title Código do Cupom */
    codCupom: string
    /** @title Descrição do Cupom */
    description: HTML
  }

const Cupom = ({codCupom, description}:Props) => {
    return (
        <div class="flex items-center justify-center flex-col my-8">
            <h3 class="text-3xl font-bold text-green-600">{codCupom}</h3>
            <div dangerouslySetInnerHTML={{ __html: description }}/>
        </div>
    )
}

export default Cupom