import { config } from "./config";
import { app } from './server';

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`));

