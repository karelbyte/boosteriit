import { useRouter } from 'next/navigation';
import useAppContext from '../contexts/hookAppContext';

export default function useShoppingCart() {
  const router = useRouter();
  const {
    setSelectedSolutions,
    setSelectedIndustry,
    setSelectedModules,
    setSelectedSections,
    setSelectedIndustriesTemplate,
    setSelectedIntegrations,
    setSelectedAddtionals,
  } = useAppContext();
  const clear = () => {
    router.push('/');
    setTimeout(() => {
      setSelectedSolutions([]);
      setSelectedIndustry(null);
      setSelectedModules([]);
      setSelectedSections([]);
      setSelectedIndustriesTemplate([]);
      setSelectedIntegrations([]);
      setSelectedAddtionals([]);
    }, 4000);
  };

  return {
    clear,
  };
}
