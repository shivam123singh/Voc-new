// this switches each view when creating audience
export const handleSwitchView = ({ UploadSpreadsheet, AudienceSpreadSheetUploadSuccess, CreateAudienceForm, stage, setStage }) => {
    switch (stage.stage) {
      case 3:
        return (
          <UploadSpreadsheet
            handleUpload={() =>
              setStage({
                stage: 4,
                title: '',
                hasSkip: false,
                headerPosition: 'text-center',
                size: 'sm:max-w-[500px]',
              })
            }
          />
        );
      case 4:
        return <AudienceSpreadSheetUploadSuccess />;
      default:
        return (
          <CreateAudienceForm
            handleNext={() =>
              setStage({
                stage: 2,
                title: 'Audience created!',
                hasSkip: true,
                headerPosition: 'text-center',
                size: 'sm:max-w-[425px]',
              })
            }
          />
        );
    }    
  }