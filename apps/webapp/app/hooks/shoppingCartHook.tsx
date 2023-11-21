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
    setSelectedAdditionals,
  } = useAppContext();

  const clear = () => {
    router.push('/');
    setTimeout(() => {
      setSelectedSolutions([]);
      localStorage.removeItem('solutions');
      setSelectedIndustry(null);
      localStorage.removeItem('industry');
      setSelectedModules([]);
      localStorage.removeItem('modules');
      setSelectedSections([]);
      localStorage.removeItem('sections');
      setSelectedIndustriesTemplate([]);
      localStorage.removeItem('templates');
      setSelectedIntegrations([]);
      localStorage.removeItem('integrations');
      setSelectedAdditionals([]);
      localStorage.removeItem('additionals');
    }, 4000);
  };

  return {
    clear,
  };
}
